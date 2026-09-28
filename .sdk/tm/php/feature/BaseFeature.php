<?php
declare(strict_types=1);

// Vapi SDK base feature

class VapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(VapiContext $ctx, array $options): void {}
    public function PostConstruct(VapiContext $ctx): void {}
    public function PostConstructEntity(VapiContext $ctx): void {}
    public function SetData(VapiContext $ctx): void {}
    public function GetData(VapiContext $ctx): void {}
    public function GetMatch(VapiContext $ctx): void {}
    public function SetMatch(VapiContext $ctx): void {}
    public function PrePoint(VapiContext $ctx): void {}
    public function PreSpec(VapiContext $ctx): void {}
    public function PreRequest(VapiContext $ctx): void {}
    public function PreResponse(VapiContext $ctx): void {}
    public function PreResult(VapiContext $ctx): void {}
    public function PreDone(VapiContext $ctx): void {}
    public function PreUnexpected(VapiContext $ctx): void {}
}
