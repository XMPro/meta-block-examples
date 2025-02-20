let hasInitialized = false;

let viewer;
const cssViewerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*';
const viwerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js';

var autoDeskClientId;
var autoDeskClientSecret;
var token;
var documentId;

function onValueMappingLoaded(data){
    autoDeskClientId = data['client_id'];
    autoDeskClientSecret = data['client_secret'];
    documentId = data['document_id'];

    // Load viewer resources
    Promise.all([
        loadCSSViewer(cssViewerUrl),
        loadViewer(viwerUrl),
        getToken()
    ]).then(() => {
        loadModel(token);
    }).catch(error => {
        console.error('Error loading viewer resources:', error);
    });
}

function getToken() {
    return fetch(`https://developer.api.autodesk.com/authentication/v2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: autoDeskClientId,
            client_secret: autoDeskClientSecret,
            grant_type: "client_credentials",
            scope: "code:all data:write data:read bucket:create bucket:delete bucket:read viewables:read"
        })
    })
    .then(response => response.json())
    .then(data => {
        token = data.access_token;
    })
    .catch(error => console.error("Error:", error));
}

function loadViewer(viewer_url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = viewer_url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadCSSViewer(css_viewer_url) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = css_viewer_url;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

function loadModel(token) {
	var options = {
		env: 'AutodeskProduction2',
		api: 'streamingV2',
		getAccessToken: function(onTokenReady) {
			onTokenReady(token, 3600);
		}
	};
	
    
    Autodesk.Viewing.Initializer(options, function() {
        // Create and initialize the viewer
        const htmlDiv = document.getElementById('main');
        viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
        
        const startedCode = viewer.start();
        if (startedCode > 0) {
            console.error('Failed to create a Viewer: WebGL not supported.');
            return;
        }

        // Load the document
        loadDocument(token);
    });
}

function loadDocument(token) {
    // Add authorization header
    const options = {
        'Authorization': 'Bearer ' + token
    };

    Autodesk.Viewing.Document.load(
        documentId, 
        onDocumentLoadSuccess,
        onDocumentLoadFailure,
        options
    );
}

function onDocumentLoadSuccess(doc) {
    const defaultModel = doc.getRoot().getDefaultGeometry();
    if (!defaultModel) {
        console.error('Document contains no default geometry.');
        return;
    }

    viewer.loadDocumentNode(doc, defaultModel)
        .then(function(model) {
            console.log('Model loaded successfully');
        })
        .catch(function(error) {
            console.error('Error loading model:', error);
        });
}

function onDocumentLoadFailure(error) {
    console.error('Failed fetching Forge manifest:', error);
}