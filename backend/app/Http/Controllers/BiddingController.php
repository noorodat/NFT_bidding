<?php

namespace App\Http\Controllers;

use App\Models\Bidding;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class BiddingController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $user = User::get();
        $product = Product::get();
        $biddings = Bidding::get();
        return view('dashboard.biddings.index', compact('biddings', 'user', 'product'));
    }



    public function create()
    {
        //
    }


    public function store(Request $request)
    {

    }




    public function show(Bidding $bidding)
    {

    }


    public function edit(Bidding $bidding)
    {

    }


    public function update(Request $request, Bidding $bidding)
    {

    }


    public function destroy(Bidding $bidding)
    {

    }

    
    public function getAllBidding()
    {
        //
        $biddings = bidding::all();
        return response()->json($biddings);
        
    }

   
    public function createBidding(Request $request)
    {
        $biddings = new bidding();

       

        $biddings->user_id = $request->user_id;

        $biddings->product_id = $request->product_id;

        $biddings->amount = $request->amount;

        $biddings->save();

        return response($biddings, 201);
    }

    
    public function getBidding($id)
    {
        $biddings = bidding::find($id);
        if (!$biddings) {
            return response()->json(['error' => 'bidding not found'], 404);
        }
        return response()->json($biddings);
    }

    public function updateBidding( Request  $request ,$id )
    {
        $biddings = bidding::find($id);
        $biddings->user_id = $request->user_id;

        $biddings->product_id = $request->product_id;

        $biddings->amount = $request->amount;

        $biddings->updat();

        return response($biddings, 201);
    }

    
    public function destroyBidding($id)
    {
        $biddings = Bidding::find($id); 
        if (!$biddings) {
            return response()->json(['error' => 'Bidding not found'], 404);
        }
    
        $biddings->delete(); 
    
        return response()->json(['message' => 'Bidding deleted']);
    }
}
        //
    
    

