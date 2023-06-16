require("dotenv");

const address = process.env.API_BASE_ADDRESS || '';

export const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'API de Veículos e Estacionamentos',
    version: '1.0.0',
  },
  "servers": [
    {
      "url": address
    }
  ]
  ,
  paths: {
    '/vehicle': {
      get: {
        summary: 'Lista todos os veículos',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Vehicle',
                  },
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
      post: {
        summary: 'Cria um novo veículo',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Vehicle',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Vehicle',
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
    },
    '/vehicle/{id}': {
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      
      put: {
        summary: 'Atualiza um veículo existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Vehicle',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Vehicle',
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          },
          '404': {
            description: 'Veículo não encontrado',
          }
        },
      },
      delete: {
        summary: 'Exclui um veículo existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        }
      },
    },
    '/parking': {
      get: {
        summary: 'Lista todos os estacionamentos',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Parking',
                  },
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
      post: {
        summary: 'Cria um novo estacionamento',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Parking',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Parking',
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
    },
    '/parking/{id}': {
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      get: {
        summary: 'Retorna um estacionamento pelo ID',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Parking',
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
      put: {
        summary: 'Atualiza um estacionamento existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Parking',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Parking',
                },
              },
            },
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
      delete: {
        summary: 'Exclui um estacionamento existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '401':{
            $ref: '#/components/responses/UnauthorizedError'
          }
        },
      },
    },
  },
  components: {
    schemas: {
      Vehicle: {
        type: 'object',
        properties: {
          control_number: {
            type: 'number',
            required: true,
          },
          license_plate: {
            type: 'string',
            required: true,
          },
          category: {
            type: 'string',
            required: true,
          },
          additional_services: {
            type: 'string',
          },
        },
      },
      Parking: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            required: true,
          },
          address: {
            type: 'string',
            required: true,
          },
          cep: {
            type: 'string',
            required: true,
          },
          parking_lots: {
            type: 'number',
            required: true,
          },
          parked: {
            type: 'number',
            required: true,
          },
        },
      },
    },
    securitySchemes: {
      jwtAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    responses: {
      UnauthorizedError:{
        description: 'Unauthorized'
     }
    }
    
  },
  security: [
    {
      jwtAuth: [],
    },
  ]
  
};

//module.exports = swaggerSpec;
