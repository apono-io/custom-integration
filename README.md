### Custom Integration

In this repo you can find examples of how to implement custom integration with Apono.

The API is the following:
```
"get-status" {
    "custom_parameters" map[string]interface{} 
}

"list-resources" {
    "resource_type" string                 
    "custom_parameters" map[string]interface{} 
}

"list-resources-tags" {
    "custom_parameters" map[string]interface{} 
}

"create-credentials" {
    "username" string                 
    "resource_type" string                 
    "resources" []string               
    "custom_parameters" map[string]interface{} 
}

"reset-credentials" {
    "username" string                 
    "resource_type" string                 
    "resources" []string               
    "custom_parameters" map[string]interface{} 
}

"delete-credentials" {
    "username" string                 
    "resource_type" string                 
    "resources" []string               
    "custom_parameters" map[string]interface{} 
}

"grant-access" {
    "grant_id" string                 
    "username" string                 
    "resource_type" string                 
    "resources" []string               
    "permission" string                 
    "custom_parameters" map[string]interface{} 
}

"revoke-access" {
    "grant_id" string                 
    "username" string                 
    "resource_type" string                 
    "resources" []string               
    "permission" string                 
    "custom_parameters" map[string]interface{} 
}
```
