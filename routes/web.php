<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/my-codes', function () {
    return Inertia::render('MyCodes');
});

Route::get('/features', function () {
    return Inertia::render('Features');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});

Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
});

Route::get('/cookie-policy', function () {
    return Inertia::render('CookiePolicy');
});

Route::get('/visit/{slug}', function ($slug) {
    return Inertia::render('Visit', [$slug]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
