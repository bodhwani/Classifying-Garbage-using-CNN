# Utopia
[Utopia](http://utopiacity.surge.sh/)

# Aim 
An app which classifies garbage using Residual networks model (Convolutional Neural Networks). 

# Dataset
You can easily download dataset from here - https://drive.google.com/drive/folders/0B3P9oO5A3RvSUW9qTG11Ul83TEE
This repository contains the dataset that we collected. The dataset spans six classes: glass, paper, cardboard, plastic, metal, and trash. Currently, the dataset consists of 2527 images:

- 501 glass
- 594 paper
- 403 cardboard
- 482 plastic
- 410 metal
- 137 trash

The size of the original dataset, ~3.5GB, exceeds the git-lfs maximum size so it has been uploaded to Google Drive. If you are planning on using the Python code to preprocess the original dataset, then download dataset-original.zip from the link below and place the unzipped folder inside of the data folder.
We increase our dataset size which leads to 21000 images as training dataset and 6000 images as testing dataset.


# Implementation 
- Augmentation : As the data size was not sufficient, we applied augmented techniques to increase the dataset size.
- Dataset : We converted our dataset into binary files(HDF5 dataset) as it takes very less time in processing.
- Web Sockets : We implemented socket programming which enables us to work in real time environment.
- Accuracy : We trained our model on GPU (Google Colab) and achieved an 97.4% accuracy on training dataset and 93.2% on testing dataset.

# How it works
- Click an image using our app.
- The image gets classified based on our trained model.
- The output will be shown to the website - [Utopia](http://utopiacity.surge.sh/)

## How to deploy?

### Running on localhost

* **Step 1:** Fork the repository and clone it to your machine
* **Step 2:** Cd into the cloned folder
* **Step 3:** Install all the dependencies with:```$ npm install```
* **Step 4:** Run on http://localhost:3000 with:```$ npm run start```
* **Step 5:** Build locally with: ```$ npm run build ```
* **Step 6:** To deploy at a URL use: ```$ npm run deploy ```

You can use our already trained model, or you can train of yourself.

