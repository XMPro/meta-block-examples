// autodesk-forge-viewer.js

var hasInitialized = false;

function onValueMappingLoaded(data) {
    
    // Prevent multiple initializations
    if (hasInitialized) 
        return;
    
    hasInitialized = true;

    // Load the CSS forge dependencies
    const cssViewerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*';
    loadCSSViewer(cssViewerUrl);
    
    // Load the forge viewer
    var viwerUrl = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js';
    var viewer = loadViewer(viwerUrl);
    
    // Get the model URL from the data
    const modelUrl = data['model_url']

    // Load the model into the viewer
    loadModel(viewer, modelUrl);
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

function loadCSSViewer(css_viewer_url){
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

// Loads the model into the viewer
function loadModel(viewer, modelUrl) {
    viewer.then(() => {
        var myViewerDiv = document.getElementById('main');
        var viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);
        var options = {
            'env': 'Local',
            'document': modelUrl
        };
        Autodesk.Viewing.Initializer(options, function onInitialized() {
            viewer.start(options.document, options);
        });
    }).catch((error) => {
        console.error('Failed to load Forge viewer:', error);
    });
}