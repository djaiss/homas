<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_news', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('author_id');
            $table->string('title');
            $table->text('content');
            $table->boolean('is_dummy')->default(false);
            $table->timestamps();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('author_id')->references('id')->on('employees')->onDelete('cascade');
        });
    }
}
