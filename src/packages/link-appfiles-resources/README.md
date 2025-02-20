# XMPro Link App Files Resources Example

## Overview
This package contains an example Application that references local resources that are uploaded on the App Files of the Application

## Project Structure

```
link-appfiles-resources/
├── AppFiles/
│   ├── offline_files/
│   │   ├── offline_image.png
│   │   ├── offline-script.js
│   │   └── offline-styles.css
├── link-appfiles-resources.xapp
├── offline-index.html
└── README.md
```

## Installation in XMPro Application Designer

### Prerequisites
- Active XMPro Application Designer instance
- Modern web browser
- Active internet connection

### Installation Steps
1. Access XMPro Application Designer
2. Navigate to **Applications** in the left sidebar
3. Click **Import** in the Applications blade
4. In the Import blade:
   - Security Key: `C0mp|ex123`
   - Click **Select a file** and select `link-appfiles-resources.xapp` in your local directory
   - Click **Upload**

### Testing
1. Open the `offline-index.html`
2. Notice the resources from AppFiles folder are properly loaded.
3. Make sure to follow the correct folder structure when linking new resources.

### Support
For additional support or questions, please contact your XMPro system administrator or refer to the XMPro documentation.

## License
This application is provided under the terms of your XMPro license agreement.
