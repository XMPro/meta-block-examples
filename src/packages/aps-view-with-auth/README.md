# XMPro Autodesk Platform Services Viewer with Authentication

## Overview
This package contains a 3D viewer application built for XMPro Application Designer, utilizing Autodesk Platform Services (APS) Viewer with authentication. The application is implemented as a metablock that authenticates against the APS Authentication API and uses the received access token to initialize the viewer and load models through the Model Derivative API.

### Key Features
- Interactive 3D model viewing
- Secure authentication with APS Authentication API using the REST API connector
- Model loading via APS Model Derivative API

## Package Contents
| File | Description |
|------|-------------|
| `aps-view-with-auth.xapp` | Main XMPro application package |
| `aps-view-with-auth.html` | 3D viewer interface template |
| `aps-view-with-auth.css` | Viewer styling definitions |
| `aps-view-with-auth.js` | Authentication and viewer functionality |
| `test-harness.html` | Local testing environment |
| `server.js` | Local development server configuration |

## Installation in XMPro Application Designer

### Prerequisites
- Active XMPro Application Designer instance
- [REST API Connector v1.01](https://xmpro.gitbook.io/rest-api-connector)
- Modern web browser with WebGL support
- Active internet connection for APS Viewer dependencies
- [Autodesk Platform Services app client credentials](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app/)
- [Application Designer variables](https://documentation.xmpro.com/how-tos/manage-variables):
   * `AUTODESK_URL` - Autodesk Forge Authentication API base URL
   * `AUTODESK_CLIENT_ID` - App client ID
   * `AUTODESK_CLIENT_SECRET` (Encrypted) - App client secret

### Installation Steps
1. Access XMPro Application Designer
2. Navigate to **Applications** in the left sidebar
3. Click **Import** in the Applications blade
4. In the Import blade:
   - Security Key: `C0mp|ex123`
   - Click **Select a file** and select `aps-view-with-auth.xapp` in your local directory
   - Click **Upload**

## Configuration
Configure the REST API data source in the Data Source configuration of the metablock. The resulting access token is passed to the metablock through the `onDataLoaded()` function.

## Displaying Other Models

### Prerequisites
Before displaying a different model, you'll need to prepare your model file for the viewer. Follow the APS documentation:
[Prepare a File for the Viewer](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/prep-file4viewer/)

### Steps to Change Models
Once your model is prepared, simply update the `documentId` variable in the `aps-view-with-auth.js` file with your model's URN.

## Local Development and Testing

### Prerequisites
- Node.js (Download from https://nodejs.org/ if not already installed)
- Provided test files (`test-harness.html` and `server.js`)
- Web browser with WebGL support
- [Autodesk Platform Services app client credentials](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app/)

### Setup Process
1. Open terminal in project directory
2. Install dependencies:
   ```bash
   npm init -y
   npm install express
   ```
3. Create a `public` folder and move all files into it:
   - `test-harness.html`
   - `aps-view-with-auth.html`
   - `aps-view-with-auth.css`
   - `aps-view-with-auth.js`
4. Launch test environment:
   ```bash
   node server.js
   ```
5. Access `http://localhost:3000` in your browser

## Troubleshooting Guide

### Common Issues and Solutions

#### Viewer Not Displaying
- Check your internet connection
- Verify WebGL is enabled in your browser
- Ensure the access token is being correctly passed from the data source
- Verify your APS API credentials are valid

#### Authentication Issues
- Check the REST API data source configuration
- Verify the access token format
- Ensure your APS API credentials have the necessary permissions

#### Local Testing Issues
- Verify Node.js is properly installed
- Check if port 3000 is available
- Ensure all files are in the `public` folder
- Confirm the test environment has valid authentication credentials

### Support
For additional support or questions, please contact your XMPro system administrator or refer to the XMPro documentation.

## License
This application is provided under the terms of your XMPro license agreement. The Autodesk Platform Services Viewer is subject to Autodesk Platform Services' terms of service.