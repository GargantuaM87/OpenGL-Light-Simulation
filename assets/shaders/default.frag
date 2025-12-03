#version 330 core
out vec4 FragColor;

struct Material {
    float objectColor;
    float shininess;
};

struct PointLight 
{
    vec3 position;

    vec3 ambient;
    vec3 diffuse;
    vec3 specular;

    float constant;
    float linear;
    float quadratic;
}; 

uniform PointLight u_pointLight;
uniform Material u_mat;
uniform vec3 u_viewPos;

in vec3 FragPos;
in vec3 Normal;

vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 viewDir);

void main()
{
   vec3 norm = normalize(Normal);
   vec3 viewDir = normalize(u_viewPos - FragPos);

   vec3 result = CalcPointLight(u_pointLight, norm, FragPos, viewDir);

   FragColor = vec4(result, 1.0);
}

vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 viewDir) 
{
    vec3 lightDir = normalize(light.position - fragPos);

    //diffuse
    float diff = max(dot(normal, lightDir), 0.0);

    //specular
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), u_mat.shininess);

    //attenuation
    float distance = length(light.position - fragPos);
    float attenuation = 1 / (light.constant + light.linear * distance + light.quadratic * (distance * distance)); 

    // combine results
    vec3 ambient = light.ambient * u_mat.objectColor;
    vec3 diffuse = light.diffuse * diff * u_mat.objectColor;
    vec3 specular = light.specular * spec;

    ambient *= attenuation;
    diffuse *= attenuation;
    specular *= attenuation;

    return (ambient + diffuse + specular);
}