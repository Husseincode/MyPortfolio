/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

const fetchVercelProjects = async () => {
  const API_TOKEN = process.env.VERCEL_API_TOKEN; // Replace with your actual Vercel API token
  const url = 'https://api.vercel.com/v9/projects';

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const projects = response.data.projects;

    projects.forEach((project: any) => {
      console.log(`Project Name: ${project.name}`);
      console.log(`GitHub Repo: ${project.link?.repo}`);
      console.log(`Production URL: https://${project.alias[0]}`);
    });
  } catch (error: any) {
    console.error(
      'Error fetching projects:',
      error.response?.data || error.message
    );
  }
};

fetchVercelProjects();
