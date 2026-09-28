<?php
declare(strict_types=1);

// Vapi SDK utility: result_headers

class VapiResultHeaders
{
    public static function call(VapiContext $ctx): ?VapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
