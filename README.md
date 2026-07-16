# Redlime DevOps Technical Assessment

This repository contains my submission for the **DevOps Intern Technical Assessment** at **Redlime Solutions Ltd.**

## Project Overview

The project consists of two independent static websites deployed as Docker containers behind an Nginx reverse proxy. The application is hosted on an AWS EC2 instance and deployed automatically using GitHub Actions.

## Architecture

```
                    GitHub Repository
                           │
                    GitHub Actions
                           │
                    SSH Deployment
                           │
                    AWS EC2 Instance
                           │
                  Docker Compose
                           │
          ┌────────────────┴────────────────┐
          │                                 │
     Nginx Reverse Proxy              Docker Network
          │                                 │
     ┌────┴────┐                      ┌─────┴─────┐
     │         │                      │           │
 /site1     /site2                Site 1     Site 2
```

## Technologies Used

- Docker
- Docker Compose
- Nginx
- AWS EC2
- GitHub Actions
- Git
- Ubuntu Server

---

## Repository Structure

```
RedLime_Assesment/

├── site1/
│   ├── Dockerfile
│   ├── index.html
│   └── ...
│
├── site2/
│   ├── Dockerfile
│   ├── index.html
│   └── ...
│
├── nginx/
│   └── default.conf
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── docker-compose.yml
└── README.md
```

---

# Deployment Approach

The deployment follows a GitHub Actions based CI/CD workflow.

1. Develop and test locally using Docker Compose.
2. Push changes to the `main` branch.
3. GitHub Actions automatically starts.
4. GitHub Actions connects to the AWS EC2 instance using SSH.
5. The latest code is pulled from GitHub.
6. Docker Compose rebuilds and restarts the containers.
7. The updated application becomes available immediately.

---

# CI/CD Pipeline

```
Developer

    │

git push origin main

    │

    ▼

GitHub Repository

    │

    ▼

GitHub Actions

    │

    ▼

SSH into AWS EC2

    │

    ▼

git pull origin main

docker compose up --build -d

    │

    ▼

Updated Website
```

---

# Running the Project Locally

Clone the repository

```bash
git clone https://github.com/SamirAlRashid/RedLime_Assesment.git

cd RedLime_Assesment
```

Build and start the containers

```bash
docker compose up --build
```

Access the websites

```
http://localhost/site1

http://localhost/site2
```

---

# Live Deployment

AWS EC2

Site 1

```
http://13.62.26.100/site1
```

Site 2

```
http://13.62.26.100/site2
```

---

# GitHub Actions Workflow

The deployment workflow automatically runs whenever code is pushed to the **main** branch.

Workflow steps:

- Checkout repository
- Build Docker images
- Connect to AWS EC2 via SSH
- Pull latest code
- Rebuild Docker containers
- Restart application

---

# Docker Components

## Site 1

- Dockerized static website
- Served using Nginx

## Site 2

- Dockerized static website
- Served using Nginx

## Reverse Proxy

The reverse proxy routes requests as follows:

```
/site1  → Site 1 Container

/site2  → Site 2 Container
```

---

# AWS Infrastructure

- AWS EC2 (Ubuntu)
- Docker Engine
- Docker Compose
- Elastic IP
- Security Group
- GitHub Actions Deployment

---

# Author

**Samir Abdullah**

GitHub:
https://github.com/SamirAlRashid

Email:
rashidalsamir@gmail.com
