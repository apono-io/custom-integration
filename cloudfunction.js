exports.helloWorld = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Only POST requests are allowed.' });
  }

  if (!req.is('application/json')) {
    return res.status(400).send({ error: 'The request body must be in JSON format.' });
  }

  const params = req.body.params;
  
  switch (req.body.event_type) {
    case 'list-resources':
      return listResources(params);
    case 'grant-access':
      return grantAccess(params);
    case 'revoke-access':
      return revokeAccess(params);
    default:
      return res.status(200).send("ok");
  }

  function listResources(params) {
    return res.status(200).send(
      {
        resources: [{
          'id': 'all',
          'name': 'All',
          'type': params.resource_type
        }],
        permissions: [{
          'id': 'grant',
          'name': 'Grant'
        }]
      }
    );
  }

  function grantAccess(params) {
    const username = params.username;
    const grantId = params.grant_id;
    const resources = params.resources;
    const permission = params.permission;
    
    const param1 = params.custom_parameters.param1
    const param2 = params.custom_parameters.param2

    console.log(param1)
    console.log(param2)
    
    return res.status(200).send({ status: 'ok' });
  }

  function revokeAccess(params) {
    const username = params.username;
    const grantId = params.grant_id;
    const resources = params.resources;
    const permission = params.permission;

    const param1 = params.custom_parameters.param1
    const param2 = params.custom_parameters.param2
    
    return res.status(200).send({ status: 'ok' });
  }
  
  
}
