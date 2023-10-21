<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleWar
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, )
    {
        // if (!Auth::check()) {
        //     return redirect('dashboard_login')->with('fail', 'You must be logged in as an admin to access this page !');
        // }

        if (!session()->has('id')) {
            // $message = $customMessageerror ?: 'Unauthorized access, please log in';
            return redirect('dashboard_login')->with('fail', 'You must be logged in as an admin to access this page !');
        }

        return $next($request);
    }
}
