# First OpenGL Project

This is a simulation of Phong lighting in OpenGL, utilizing components such as ambient, diffuse, and specular lighting. This project is extremely small. It consists of some floating cubes, an interactive camera, an ImGui interface for manipulating data, two point lights, a directional light, and a spot light. I plan to gradually fix some features and add more as I continue my journey into Computer Graphics. Feel free to build this project and give it a try. If there is anything that piques your interest or you'd like to criticize, please email me at ayindeabrams@gmail.com.

## Required Software
- Git
- A C/C++ Compiler (I use GCC in this case)
- CMake
- GLFW
For a stable install of GLFW on Ubuntu:
```bash
sudo apt update
sudo apt install libglfw3-dev libglfw3
```
This will install the main library and development headers for GLFW.

For installation on macOS:
```bash
brew install glfw
```
And if you don't have the Homebrew package manager, then get it!

## External Libraries
This project uses:
- GLFW
- GLM
- GLAD
- stb
- Dear ImGui

## Installation Steps
1. Clone this repository, then head inside its directory
```bash
git clone <wtv-the-url-is>
cd ProjectName
```
2. Create a ./build directory
```bash
mkdir build
cd build
```
3. Configure the project with CMake
```bash
cmake ..
```

4. Finally, build the project!
```bash
cmake --build .
```
Make sure the project is run on ./main.cpp

## Screenshots
<img width="902" height="938" alt="image" src="https://github.com/user-attachments/assets/f46fb0fa-e14e-46f5-a926-14f3f078dd90" />
<img width="902" height="938" alt="Screenshot from 2025-12-09 11-23-42" src="https://github.com/user-attachments/assets/2e6afdf1-b4b0-43f5-9b4e-bb00d471f037" />
<img width="902" height="938" alt="Screenshot from 2025-12-09 11-22-42" src="https://github.com/user-attachments/assets/56e5e5fb-d06a-4ab3-8b44-b53a9009921d" />

As you can see so far, there's not much to do. It is just a boring light simulation so far with a bunch of floating cubes. But this only serves as the base of the project. As I continue learning, I'll update this project accordingly with new stuff to showcase what I've learned!



