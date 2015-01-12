<?php

$path = realpath(__DIR__);

return [
    'view_manager' => [
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => [
            'layout/layout'           => $path . '/../../module/Application/view/layout/layout.phtml',
            'error/404'               => $path . '/../../module/Application/view/error/404.phtml',
            'error/index'             => $path . '/../../module/Application/view/error/index.phtml',
        ]
    ],
];
