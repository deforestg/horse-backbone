<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        $application         = $e->getApplication();
        $eventManager        = $application->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);

        $config    = $application->getServiceManager()->get('config');
        $viewModel = $e->getViewModel();
        $routes    = $this->prepareRoutes($config['router']['routes']);
        $viewModel->setVariable('routes', $routes);
    }

    protected function prepareRoutes($routes, $rootKey = '', $rootRoute = '')
    {
        $routeNames = [];

        foreach ($routes as $routeKey => $routeInfo) {
            $name = $routeKey;
            if (!empty($rootKey)) {
                $name = $rootKey . '/' . $name;
            }
            $route = $rootRoute . $routeInfo['options']['route'];

            $childRouteNames = [];

            if (empty($routeInfo['child_routes'])) {
                $routeNames[$name] = $route;
            } else {
                if ($routeInfo['may_terminate']) {
                    $routeNames[$name] = $route;
                }

                //dive into the child routes
                $childRouteNames = $this->prepareRoutes($routeInfo['child_routes'], $name, $route);
            }

            $routeNames = array_merge($routeNames, $childRouteNames);
        }

        return $routeNames;
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return [
            'Zend\Loader\StandardAutoloader' => [
                'namespaces' => [
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ],
            ],
        ];
    }
}
