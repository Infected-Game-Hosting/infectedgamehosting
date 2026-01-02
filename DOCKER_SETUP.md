# Docker Development Setup

This project uses Docker to ensure consistent development environments across all team members, regardless of operating system (Windows, Mac, Linux) or local Node.js version.

## Prerequisites

Install Docker Desktop for your operating system:

- **Windows**: [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- **Mac**: [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)
- **Linux**: [Docker Engine](https://docs.docker.com/engine/install/)

## Why Docker?

✅ **Consistent Node version** (22) across all developers  
✅ **Cross-platform compatibility** - no more "works on my machine"  
✅ **Matches production environment** (CI/CD pipeline uses Node 22)  
✅ **Isolated dependencies** - won't conflict with your system Node installation  
✅ **Easy onboarding** for new team members

## Quick Start

### 1. First Time Setup

```bash
# Clone the repository
git clone <repository-url>
cd <project-folder>

# Start Docker containers (this will build the image first time)
docker-compose up
```

The application will be available at `http://localhost:5173`

### 2. Daily Development

```bash
# Start the development server
docker-compose up

# Or run in background (detached mode)
docker-compose up -d

# View logs when running in background
docker-compose logs -f

# Stop the server
docker-compose down
```

## Common Commands

### Installing Packages

```bash
# Install a new package
docker-compose exec app npm install <package-name>

# Install as dev dependency
docker-compose exec app npm install -D <package-name>

# Examples:
docker-compose exec app npm install axios
docker-compose exec app npm install -D @types/node
docker-compose exec app npm install -D eslint
```

### Running Scripts

```bash
# Build for production
docker-compose exec app npm run build

# Run linter
docker-compose exec app npm run lint

# Run tests
docker-compose exec app npm test

# Run any other npm script
docker-compose exec app npm run <script-name>
```

### Accessing Container Shell

```bash
# Open shell inside the container
docker-compose exec app sh

# Now you can run multiple commands:
npm install
npm run build
exit
```

### Troubleshooting

```bash
# Restart containers
docker-compose restart

# Rebuild containers (after Dockerfile changes)
docker-compose up --build

# Clean slate (removes containers and volumes)
docker-compose down -v
docker-compose up --build

# View container status
docker-compose ps

# View logs
docker-compose logs app
```

## Project Structure

```
.
├── Dockerfile              # Defines the Docker image
├── docker-compose.yml      # Orchestrates the container
├── .dockerignore          # Files to exclude from Docker build
├── package.json
├── vite.config.js
└── src/
```

## Environment Variables

Environment variables should be placed in a `.env` file in the project root. These will be automatically loaded by Docker Compose.

```bash
# .env
VITE_PUBLIC_POSTHOG_KEY=your_key_here
VITE_PUBLIC_POSTHOG_HOST=your_host_here
```

**Note**: Never commit `.env` to version control!

## How It Works

1. **Dockerfile** - Defines a Node 22 environment with all dependencies
2. **docker-compose.yml** - Configures ports, volumes, and environment variables
3. **Volume Mapping** - Your local files are synced with the container, so changes are reflected immediately
4. **Hot Reload** - Vite's dev server watches for changes and hot-reloads automatically

## FAQs

### Do I need to have Node.js installed on my machine?

No! Docker provides the Node environment. You can have any version (or no version) of Node on your machine.

### Where are node_modules stored?

Inside the Docker container. This prevents conflicts between different operating systems (especially Windows vs Mac/Linux).

### My changes aren't showing up

Make sure the container is running (`docker-compose ps`) and check logs for errors (`docker-compose logs -f`).

### Ports already in use

If port 5173 is already taken, edit `docker-compose.yml` and change the port mapping:

```yaml
ports:
  - "3000:5173" # Access via localhost:3000 instead
```

### Docker is slow on my machine

- On Windows/Mac, ensure WSL2 backend is enabled in Docker Desktop settings
- Allocate more resources to Docker in Docker Desktop → Settings → Resources
- Consider using [Docker Desktop performance tips](https://docs.docker.com/desktop/settings/)

### I want to use my local Node instead

Simply run `npm install` and `npm run dev` as usual. However, this may cause compatibility issues with teammates using different environments.

## CI/CD Integration

Our GitHub Actions workflow (`.github/workflows/deploy.yml`) uses Node 22, matching the Docker environment. This ensures builds work the same way locally and in production.

## Getting Help

- Check Docker logs: `docker-compose logs -f`
- Restart containers: `docker-compose restart`
- Ask in team chat or open an issue

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Vite Documentation](https://vitejs.dev/)
