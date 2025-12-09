#version 330 core
out vec4 FragColor;

uniform vec3 u_lightColor;

in vec3 GourandResult;

void main() 
{
    FragColor = vec4(GourandResult, 1.0); 
}