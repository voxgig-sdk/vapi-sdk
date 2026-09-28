<?php
declare(strict_types=1);

// Vapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class VapiMakeContext
{
    public static function call(array $ctxmap, ?VapiContext $basectx): VapiContext
    {
        return new VapiContext($ctxmap, $basectx);
    }
}
