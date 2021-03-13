<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateEmployeesWithAvatarTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // necessary for SQLlite
        Schema::enableForeignKeyConstraints();

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar_original_filename');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar_extension');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar_size');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar_height');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('avatar_width');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->unsignedBigInteger('avatar_file_id')->after('phone_number')->nullable();
            $table->foreign('avatar_file_id')->references('id')->on('files')->onDelete('set null');
        });
    }
}
