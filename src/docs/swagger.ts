import keys from '../utils/constants'
const {port} = keys
const swaggerOptions = {
    "openapi": "3.0.3",
    "info": {
        "title": "MediU",
        "description": "Main backend API for the MediU application.",
        "version": "1.0.0"
    },
    "servers": [{
        "url": `http://localhost:${port}/api/v1/`
    }],
    "tags": [{
            "name": "Patients",
            "description": "APIs for the patients"
        },
        {
            "name": "Patients + Doctors",
            "description": "APIs for both patients and doctors"
        },
        {
            "name": "Doctors",
            "description": "APIs for doctors only"
        }
    ],
    "paths": {
        "/patient/login": {
            "post": {
                "tags": [
                    "Patients"
                ],
                "description": "Create new patient in system",
                "requestBody": {
                    "description": "Patient that we want to create",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Patient"
                            }
                        }
                    },
                    "required": false
                },
                "responses": {
                    "200": {
                        "description": "New patient is created",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Patient"
                                }
                            }
                        }
                    }
                },
                "x-codegen-request-body-name": "Patient"
            }
        },
        "/patient/signup": {
            "post": {
                "tags": [
                    "Patients"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Patients"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/consultation": {
            "summary": "Request a consultation",
            "post": {
                "summary": "",
                "description": "",
                "operationId": "",
                "responses": {
                    "default": {
                        "description": "Default error sample response"
                    }
                },
                "tags": [
                    "Patients"
                ]
            }
        },
        "/consultation/all": {
            "summary": "Get all consultations",
            "get": {
                "summary": "",
                "description": "",
                "operationId": "",
                "responses": {
                    "default": {
                        "description": "Default error sample response"
                    }
                },
                "tags": [
                    "Doctors"
                ]
            }
        },
        "/consultation/{id}": {
            "summary": "Get the specified consultation",
            "get": {
                "summary": "",
                "description": "",
                "operationId": "",
                "parameters": [{
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "string"
                    },
                    "required": true
                }],
                "responses": {
                    "default": {
                        "description": "Default error sample response"
                    }
                },
                "tags": [
                    "Doctors"
                ]
            }
        },
        "/patientHistoryUpload": {
            "summary": "API to work with the uploads of the patient history"
        }
    },
    "components": {
        "schemas": {
            "Patient": {
                "required": [
                    "id"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "phone": {
                        "type": "string"
                    },
                    "dob": {
                        "type": "number"
                    },
                    "gender": {
                        "type": "string"
                    },
                    "weight": {
                        "type": "number"
                    },
                    "height": {
                        "type": "integer"
                    }
                }
            },
            "Patients": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/Patient"
                }
            }
        }
    }
}

export default swaggerOptions