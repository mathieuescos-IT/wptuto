<?php

/** Production */

use Roots\WPConfig\Config;
use function Env\env;

Config::define('SAVEQUERIES', true);
Config::define('WP_DEBUG', false);
Config::define('WP_DEBUG_DISPLAY', false);

Config::define('DISALLOW_FILE_MODS', true);