<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // necessary for SQLlite
        Schema::enableForeignKeyConstraints();

        Schema::create('countries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        DB::table('countries')->insert(['name' => 'United States']);
        DB::table('countries')->insert(['name' => 'Canada']);
        DB::table('countries')->insert(['name' => 'France']);
        DB::table('countries')->insert(['name' => 'Germany']);
        DB::table('countries')->insert(['name' => 'Angola']);
        DB::table('countries')->insert(['name' => 'Burkina Faso']);
        DB::table('countries')->insert(['name' => 'Burundi']);
        DB::table('countries')->insert(['name' => 'Benin']);
        DB::table('countries')->insert(['name' => 'Botswana']);
        DB::table('countries')->insert(['name' => 'Democratic Republic Congo']);
        DB::table('countries')->insert(['name' => 'Central African Republic']);
        DB::table('countries')->insert(['name' => 'Congo']);
        DB::table('countries')->insert(['name' => "Côte d'Ivoire"]);
        DB::table('countries')->insert(['name' => 'Cameroon']);
        DB::table('countries')->insert(['name' => 'Cape Verde']);
        DB::table('countries')->insert(['name' => 'Djibouti']);
        DB::table('countries')->insert(['name' => 'Algeria']);
        DB::table('countries')->insert(['name' => 'Egypt']);
        DB::table('countries')->insert(['name' => 'Western Sahara']);
        DB::table('countries')->insert(['name' => 'Eritrea']);
        DB::table('countries')->insert(['name' => 'Ethiopia']);
        DB::table('countries')->insert(['name' => 'Gabon']);
        DB::table('countries')->insert(['name' => 'Ghana']);
        DB::table('countries')->insert(['name' => 'Gambia']);
        DB::table('countries')->insert(['name' => 'Guinea']);
        DB::table('countries')->insert(['name' => 'Equatorial Guinea']);
        DB::table('countries')->insert(['name' => 'Guinea-Bissau']);
        DB::table('countries')->insert(['name' => 'Kenya']);
        DB::table('countries')->insert(['name' => 'Comoros']);
        DB::table('countries')->insert(['name' => 'Liberia']);
        DB::table('countries')->insert(['name' => 'Lesotho']);
        DB::table('countries')->insert(['name' => 'Libya']);
        DB::table('countries')->insert(['name' => 'Morocco']);
        DB::table('countries')->insert(['name' => 'Madagascar']);
        DB::table('countries')->insert(['name' => 'Mali']);
        DB::table('countries')->insert(['name' => 'Mauritania']);
        DB::table('countries')->insert(['name' => 'Mauritius']);
        DB::table('countries')->insert(['name' => 'Malawi']);
        DB::table('countries')->insert(['name' => 'Mozambique']);
        DB::table('countries')->insert(['name' => 'Namibia']);
        DB::table('countries')->insert(['name' => 'Niger']);
        DB::table('countries')->insert(['name' => 'Nigeria']);
        DB::table('countries')->insert(['name' => 'Réunion']);
        DB::table('countries')->insert(['name' => 'Rwanda']);
        DB::table('countries')->insert(['name' => 'Seychelles']);
        DB::table('countries')->insert(['name' => 'Sudan']);
        DB::table('countries')->insert(['name' => 'Saint Helena, Ascension and Tristan da Cunha']);
        DB::table('countries')->insert(['name' => 'Sierra Leone']);
        DB::table('countries')->insert(['name' => 'Senegal']);
        DB::table('countries')->insert(['name' => 'Somalia']);
        DB::table('countries')->insert(['name' => 'South Sudan']);
        DB::table('countries')->insert(['name' => 'Sao Tome and Principe']);
        DB::table('countries')->insert(['name' => 'Swaziland']);
        DB::table('countries')->insert(['name' => 'Chad']);
        DB::table('countries')->insert(['name' => 'Togo']);
        DB::table('countries')->insert(['name' => 'Tunisia']);
        DB::table('countries')->insert(['name' => 'Tanzania']);
        DB::table('countries')->insert(['name' => 'Uganda']);
        DB::table('countries')->insert(['name' => 'Mayotte']);
        DB::table('countries')->insert(['name' => 'South Africa']);
        DB::table('countries')->insert(['name' => 'Zambia']);
        DB::table('countries')->insert(['name' => 'Zimbabwe']);
        DB::table('countries')->insert(['name' => 'Afghanistan']);
        DB::table('countries')->insert(['name' => 'Armenia']);
        DB::table('countries')->insert(['name' => 'Antartica']);
        DB::table('countries')->insert(['name' => 'Azerbaijan']);
        DB::table('countries')->insert(['name' => 'Bangladesh']);
        DB::table('countries')->insert(['name' => 'Bahrain']);
        DB::table('countries')->insert(['name' => 'Brunei Darussalam']);
        DB::table('countries')->insert(['name' => 'Bhutan']);
        DB::table('countries')->insert(['name' => 'Bouvet Island']);
        DB::table('countries')->insert(['name' => 'Cocos (Keeling) Islands']);
        DB::table('countries')->insert(['name' => 'China']);
        DB::table('countries')->insert(['name' => 'Cyprus']);
        DB::table('countries')->insert(['name' => 'Christmas Island']);
        DB::table('countries')->insert(['name' => 'Georgia']);
        DB::table('countries')->insert(['name' => 'South Georgia and the South Sandwich Islands']);
        DB::table('countries')->insert(['name' => 'Hong Kong']);
        DB::table('countries')->insert(['name' => 'Heard Island and McDonald Islands']);
        DB::table('countries')->insert(['name' => 'Indonesia']);
        DB::table('countries')->insert(['name' => 'Israel']);
        DB::table('countries')->insert(['name' => 'British Indian Ocean Territory']);
        DB::table('countries')->insert(['name' => 'India']);
        DB::table('countries')->insert(['name' => 'Iraq']);
        DB::table('countries')->insert(['name' => 'Iran']);
        DB::table('countries')->insert(['name' => 'Jordan']);
        DB::table('countries')->insert(['name' => 'Japan']);
        DB::table('countries')->insert(['name' => 'Kyrgyzstan']);
        DB::table('countries')->insert(['name' => 'Cambodia']);
        DB::table('countries')->insert(['name' => 'North Korea']);
        DB::table('countries')->insert(['name' => 'South Korea']);
        DB::table('countries')->insert(['name' => 'Kuwait']);
        DB::table('countries')->insert(['name' => 'Kazakhstan']);
        DB::table('countries')->insert(['name' => 'Lao People Democratic Republic']);
        DB::table('countries')->insert(['name' => 'Lebanon']);
        DB::table('countries')->insert(['name' => 'Sri Lanka']);
        DB::table('countries')->insert(['name' => 'Myanmar']);
        DB::table('countries')->insert(['name' => 'Mongolia']);
        DB::table('countries')->insert(['name' => 'Macao']);
        DB::table('countries')->insert(['name' => 'Maldives']);
        DB::table('countries')->insert(['name' => 'Malaysia']);
        DB::table('countries')->insert(['name' => 'New Caledonia']);
        DB::table('countries')->insert(['name' => 'Nepal']);
        DB::table('countries')->insert(['name' => 'Oman']);
        DB::table('countries')->insert(['name' => 'Philippines']);
        DB::table('countries')->insert(['name' => 'Pakistan']);
        DB::table('countries')->insert(['name' => 'Qatar']);
        DB::table('countries')->insert(['name' => 'Russian federation']);
        DB::table('countries')->insert(['name' => 'Saudi Arabia']);
        DB::table('countries')->insert(['name' => 'Singapore']);
        DB::table('countries')->insert(['name' => 'Suriname']);
        DB::table('countries')->insert(['name' => 'Syrian Arab Republic']);
        DB::table('countries')->insert(['name' => 'French Southern Territories']);
        DB::table('countries')->insert(['name' => 'Thailand']);
        DB::table('countries')->insert(['name' => 'Tajikistan']);
        DB::table('countries')->insert(['name' => 'Timor-Leste']);
        DB::table('countries')->insert(['name' => 'Turkmenistan']);
        DB::table('countries')->insert(['name' => 'Turkey']);
        DB::table('countries')->insert(['name' => 'Taiwan']);
        DB::table('countries')->insert(['name' => 'Uzbekistan']);
        DB::table('countries')->insert(['name' => 'Viet Nam']);
        DB::table('countries')->insert(['name' => 'Yemen']);
        DB::table('countries')->insert(['name' => 'Andorra']);
        DB::table('countries')->insert(['name' => 'Albania']);
        DB::table('countries')->insert(['name' => 'Austria']);
        DB::table('countries')->insert(['name' => 'Aland Islands']);
        DB::table('countries')->insert(['name' => 'Bosnia and Herzegovina']);
        DB::table('countries')->insert(['name' => 'Belgium']);
        DB::table('countries')->insert(['name' => 'Bulgaria']);
        DB::table('countries')->insert(['name' => 'Belarus']);
        DB::table('countries')->insert(['name' => 'Switzerland']);
        DB::table('countries')->insert(['name' => 'Czech Republic']);
        DB::table('countries')->insert(['name' => 'Denmark']);
        DB::table('countries')->insert(['name' => 'Estonia']);
        DB::table('countries')->insert(['name' => 'Spain']);
        DB::table('countries')->insert(['name' => 'Finland']);
        DB::table('countries')->insert(['name' => 'Faroe Islands']);
        DB::table('countries')->insert(['name' => 'United Kingdom']);
        DB::table('countries')->insert(['name' => 'Guernsey']);
        DB::table('countries')->insert(['name' => 'Gibraltar']);
        DB::table('countries')->insert(['name' => 'Greece']);
        DB::table('countries')->insert(['name' => 'Croatia']);
        DB::table('countries')->insert(['name' => 'Hungary']);
        DB::table('countries')->insert(['name' => 'Ireland']);
        DB::table('countries')->insert(['name' => 'Isle of Man']);
        DB::table('countries')->insert(['name' => 'Iceland']);
        DB::table('countries')->insert(['name' => 'Italy']);
        DB::table('countries')->insert(['name' => 'Liechtenstein']);
        DB::table('countries')->insert(['name' => 'Lithuania']);
        DB::table('countries')->insert(['name' => 'Luxembourg']);
        DB::table('countries')->insert(['name' => 'Latvia']);
        DB::table('countries')->insert(['name' => 'Monaco']);
        DB::table('countries')->insert(['name' => 'Moldova']);
        DB::table('countries')->insert(['name' => 'Montenegro']);
        DB::table('countries')->insert(['name' => 'Macedonia']);
        DB::table('countries')->insert(['name' => 'Malta']);
        DB::table('countries')->insert(['name' => 'Netherlands']);
        DB::table('countries')->insert(['name' => 'Norway']);
        DB::table('countries')->insert(['name' => 'Poland']);
        DB::table('countries')->insert(['name' => 'Portugal']);
        DB::table('countries')->insert(['name' => 'Romania']);
        DB::table('countries')->insert(['name' => 'Serbia']);
        DB::table('countries')->insert(['name' => 'Sweden']);
        DB::table('countries')->insert(['name' => 'Slovenia']);
        DB::table('countries')->insert(['name' => 'Svalbard and Jan Mayen']);
        DB::table('countries')->insert(['name' => 'Slovakia']);
        DB::table('countries')->insert(['name' => 'San Marino']);
        DB::table('countries')->insert(['name' => 'Ukraine']);
        DB::table('countries')->insert(['name' => 'Vatican City State']);
        DB::table('countries')->insert(['name' => 'Antigua and Barbuda']);
        DB::table('countries')->insert(['name' => 'Anguilla']);
        DB::table('countries')->insert(['name' => 'Aruba']);
        DB::table('countries')->insert(['name' => 'Barbados']);
        DB::table('countries')->insert(['name' => 'Saint Barthélemy']);
        DB::table('countries')->insert(['name' => 'Bermuda']);
        DB::table('countries')->insert(['name' => 'Bonaire  Sint Eustatius and Saba']);
        DB::table('countries')->insert(['name' => 'Bahamas']);
        DB::table('countries')->insert(['name' => 'Belize']);
        DB::table('countries')->insert(['name' => 'Costa Rica']);
        DB::table('countries')->insert(['name' => 'Cuba']);
        DB::table('countries')->insert(['name' => 'Curaçao']);
        DB::table('countries')->insert(['name' => 'Dominica']);
        DB::table('countries')->insert(['name' => 'Dominican Republic']);
        DB::table('countries')->insert(['name' => 'Grenada']);
        DB::table('countries')->insert(['name' => 'Greenland']);
        DB::table('countries')->insert(['name' => 'Guadeloupe']);
        DB::table('countries')->insert(['name' => 'Guatemala']);
        DB::table('countries')->insert(['name' => 'Honduras']);
        DB::table('countries')->insert(['name' => 'Haiti']);
        DB::table('countries')->insert(['name' => 'Jamaica']);
        DB::table('countries')->insert(['name' => 'Saint Kitts and Nevis']);
        DB::table('countries')->insert(['name' => 'Cayman Islands']);
        DB::table('countries')->insert(['name' => 'Saint Lucia']);
        DB::table('countries')->insert(['name' => 'Saint Martin (french)']);
        DB::table('countries')->insert(['name' => 'Martinique']);
        DB::table('countries')->insert(['name' => 'Montserrat']);
        DB::table('countries')->insert(['name' => 'Mexico']);
        DB::table('countries')->insert(['name' => 'Panama']);
        DB::table('countries')->insert(['name' => 'Saint Pierre and Miquelon']);
        DB::table('countries')->insert(['name' => 'Puerto Rico']);
        DB::table('countries')->insert(['name' => 'El Salvador']);
        DB::table('countries')->insert(['name' => 'Sint Maarten']);
        DB::table('countries')->insert(['name' => 'Turks and Caicos Islands']);
        DB::table('countries')->insert(['name' => 'Trinidad and Tobago']);
        DB::table('countries')->insert(['name' => 'Saint Vincent and the Grenadines']);
        DB::table('countries')->insert(['name' => 'Virgin Islands - British']);
        DB::table('countries')->insert(['name' => 'Virgin Islands US']);
        DB::table('countries')->insert(['name' => 'American Samoa']);
        DB::table('countries')->insert(['name' => 'Australia']);
        DB::table('countries')->insert(['name' => 'Cook Islands']);
        DB::table('countries')->insert(['name' => 'Fiji']);
        DB::table('countries')->insert(['name' => 'Guam']);
        DB::table('countries')->insert(['name' => 'Kiribati']);
        DB::table('countries')->insert(['name' => 'Norfolk Island']);
        DB::table('countries')->insert(['name' => 'Nauru']);
        DB::table('countries')->insert(['name' => 'Niue']);
        DB::table('countries')->insert(['name' => 'New Zealand']);
        DB::table('countries')->insert(['name' => 'French Polynesia']);
        DB::table('countries')->insert(['name' => 'Papua New Guinea']);
        DB::table('countries')->insert(['name' => 'Pitcairn']);
        DB::table('countries')->insert(['name' => 'Palau']);
        DB::table('countries')->insert(['name' => 'Solomon Islands']);
        DB::table('countries')->insert(['name' => 'Tokelau']);
        DB::table('countries')->insert(['name' => 'Tonga']);
        DB::table('countries')->insert(['name' => 'Vanuatu']);
        DB::table('countries')->insert(['name' => 'Wallis and Futuna']);
        DB::table('countries')->insert(['name' => 'Samoa']);
        DB::table('countries')->insert(['name' => 'Argentina']);
        DB::table('countries')->insert(['name' => 'Bolivia']);
        DB::table('countries')->insert(['name' => 'Brazil']);
        DB::table('countries')->insert(['name' => 'Chile']);
        DB::table('countries')->insert(['name' => 'Colombia']);
        DB::table('countries')->insert(['name' => 'Ecuador']);
        DB::table('countries')->insert(['name' => 'Falkland Islands']);
        DB::table('countries')->insert(['name' => 'French Guiana']);
        DB::table('countries')->insert(['name' => 'Guyana']);
        DB::table('countries')->insert(['name' => 'Nicaragua']);
        DB::table('countries')->insert(['name' => 'Peru']);
        DB::table('countries')->insert(['name' => 'Paraguay']);
        DB::table('countries')->insert(['name' => 'Uruguay']);
        DB::table('countries')->insert(['name' => 'Venezuela']);
        DB::table('countries')->insert(['name' => 'United Arab Emirates']);

        Schema::create('places', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('placable_id')->nullable();
            $table->string('placable_type')->nullable();
            $table->string('street')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('postal_code')->nullable();
            $table->unsignedBigInteger('country_id')->nullable();
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();
            $table->boolean('is_active')->default(false);
            $table->boolean('is_dummy')->default(false);
            $table->timestamps();
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
        });
    }
}
