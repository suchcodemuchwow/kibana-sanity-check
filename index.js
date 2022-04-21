const elasticApm = require('@elastic/apm-rum')

elasticApm.init({
    serverUrl: 'https://kibana-ops-e2e-perf.apm.us-central1.gcp.cloud.es.io:443',
    serviceName: 'sanity-check',
    environment: 'development'
})