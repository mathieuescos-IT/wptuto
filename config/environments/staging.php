<?php

use Roots\WPConfig\Config;

/** Staging */
ini_set('display_errors', 0);
Config::define('WP_DEBUG_DISPLAY', false);
Config::define('SCRIPT_DEBUG', false);
Config::define('DISALLOW_INDEXING', true);



