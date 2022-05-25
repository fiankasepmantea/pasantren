# Code Guide

**Generate table migration**

    php artisan make:migration create_module_name_table

All table must implement soft deletes.

**Generate Model**

    php artisan make:model Models/ModuleName

**Generate controller (API)**

    php artisan make:controller Api/ModuleNameController --resource

**Generate Http resource**

    php artisan make:resource ModuleNameResource

see more documentation at : [Laravel Http Resource Doc](https://laravel.com/docs/7.x/eloquent-resources)

**Generate Http request**

    php artisan make:request ModuleNameRequest
