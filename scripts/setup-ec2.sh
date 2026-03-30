#!/usr/bin/env bash
# Run once on the EC2 instance to prepare it for deployments.
# Usage: ssh ubuntu@<EC2_HOST> 'bash -s' < scripts/setup-ec2.sh
set -euo pipefail

echo "==> Updating packages"
sudo apt-get update -y && sudo apt-get upgrade -y

echo "==> Installing Node.js 20"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> Creating deploy directory"
mkdir -p /home/ubuntu/deploy

echo "==> Installing systemd service"
sudo tee /etc/systemd/system/ia4devs.service > /dev/null <<'SERVICE'
[Unit]
Description=IA4Devs Landing Page
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/app
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOSTNAME=0.0.0.0

[Install]
WantedBy=multi-user.target
SERVICE

sudo systemctl daemon-reload
sudo systemctl enable ia4devs

echo ""
echo "==> EC2 setup complete."
echo "    The 'ia4devs' service is enabled and will start automatically."
echo "    After the first GitHub Actions deploy, run:"
echo "      sudo systemctl start ia4devs"
echo "    Make sure port 3000 (or 80 via nginx) is open in your Security Group."
