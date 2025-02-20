let hasInitialized = false;

let viewer;
const documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6eG1wcm8vU3VzcGVuc2lvbi56aXA';

function onDataLoaded(data) {
    if (hasInitialized) return;
    hasInitialized = true;
    
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error('Invalid data format');
        return;
    }
    
    const accessToken = data[0].Access_token;
    if (!accessToken) {
        throw new Error('Access token not found in data');
    }
	
	const cssViewerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*';
	var viwerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js';

    // Load viewer resources
    Promise.all([
        loadCSSViewer(cssViewerUrl),
        loadViewer(viwerUrl)
    ]).then(() => {
        loadModel(accessToken);
    }).catch(error => {
        console.error('Error loading viewer resources:', error);
    });
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