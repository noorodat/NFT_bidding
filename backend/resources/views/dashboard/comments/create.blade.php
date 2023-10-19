@extends('dashboard.dashboard_layouts.master')

@section('title','Create New partner')


@section('css')
@endsection

@section('title_page1')
Partners
@endsection

@section('title_page2')
Create New partner
@endsection

@section('content')


    <form method="POST" style="width: 80%;margin: 50px auto" action="{{ route('comments.store') }}" enctype="multipart/form-data">
        @csrf
        @method('post')
        <div class="form-group" >
          <label for="name">Partner Name:</label>
          <input type="text" name="name" class="form-control" id="name"  placeholder="Enter Partner name">
          @error('name') <span class="text-danger">{{ $message }}</span>   @enderror

        </div>



        <br>
        <input type="submit" value="Add partner" class="btn btn-success"><br>
      </form>


@endsection

@section('scripts')

@endsection
