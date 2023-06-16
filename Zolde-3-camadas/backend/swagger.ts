export const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'API de Veículos e Estacionamentos',
    version: '1.0.0',
  },
  "servers": [
    {
      "url": "http://localhost:3333/api"
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
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Vehicle',
                },
              },
            },
          },
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
          '404': {
            description: 'Veículo não encontrado',
          },
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
            description: 'Success',
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
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Parking',
                },
              },
            },
          },
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
          '404': {
            description: 'Estacionamento não encontrado',
          },
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
          '404': {
            description: 'Estacionamento não encontrado',
          },
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
          '204': {
            description: 'No Content',
          },
          '404': {
            description: 'Estacionamento não encontrado',
          },
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
  },
};

//module.exports = swaggerSpec;
