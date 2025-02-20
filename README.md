# XMPro Metablocks Repository

This repository contains a collection of Metablock examples built for the XMPro platform. Each Metablock is a reusable component that can be integrated into XMPro applications.

## Available Metablocks

### [Autodesk Platform Services Viewer](src/packages/aps-view-basic)
A Metablock for rendering 3D models using the Autodesk Platform Services (APS) Viewer. Supports loading and displaying 3D models from specified URLs using APS's Viewer API.

## Repository Structure

```
src/
└── packages/
    └── aps-view-basic/
        ├── aps-view-basic.xapp (optional)
        ├── README.md
        ├── aps-view-basic.html
        ├── aps-view-basic.js
        ├── aps-view-basic.css
        └── tests/
            ├── test-harness/
            │   ├── test-harness.html
            │   └── server.js
            └── unit-tests/
                └── viewer-tests.js
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/organization/xmpro-metablocks.git
   ```
2. Navigate to the specific Metablock you want to work with:
   ```bash
   cd src/packages/metablock-name
   ```
3. Follow the README.md instructions in the specific Metablock's directory for setup and usage.

## Contributing

We welcome contributions! To add a new Metablock:

1. Create a new branch:
   ```bash
   git checkout -b feature/your-metablock-name
   ```
2. Follow our [Contributing Guidelines](CONTRIBUTING.md) for detailed instructions on:
   - Directory structure
   - Required files
   - Development guidelines
   - Testing requirements
   - Documentation standards

## Development Requirements

- Node.js and npm for running test harnesses
- Understanding of XMPro platform concepts
- Familiarity with HTML, CSS, and JavaScript

## Testing

Each Metablock includes:
- A test harness for local development and testing
- Unit tests for key functionality
- Documentation of test scenarios

## Documentation

Each Metablock must include:
- A README.md file explaining its purpose and usage
- Configuration documentation
- Example implementations
- Troubleshooting guides

## Support

For support:
- Check the individual Metablock's README.md
- Review the [Contributing Guidelines](CONTRIBUTING.md)
- Contact the repository maintainers

## License

[Specify your license here]