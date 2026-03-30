<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project

Professional landing page promoting an AI training program.

## Repository

Upload to `Jviejo/gh-aws-2` on GitHub.

## Deployment

- **Target:** EC2 instance at `ubuntu@44.197.178.235`
- **SSH key:** `~/.ssh/ec2-jvh2025-key`
- **Build:** runs on GitHub Actions
- **Deploy:** GitHub Action SSHes into EC2, installs dependencies, and manages the process with a systemd service
- **Service:** create and enable a systemd service on the EC2 instance to keep the app running
- establece los secrets que se necesiten.
