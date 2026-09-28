<?php
declare(strict_types=1);

// Vapi SDK utility: result_body

class VapiResultBody
{
    public static function call(VapiContext $ctx): ?VapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
