<?php
	$site_url = $_SERVER['REQUEST_URI'];
	$parameters = parse_url($site_url);
	parse_str($parameters['query'], $p);
	header('Content-type: Application/JSON');
	header('Access-Control-Allow-Origin: *');

    $csvFile = file('iata.csv');
    $iata = [];
    foreach ($csvFile as $line) {
        $iata[] = str_getcsv($line);
    }

	if ($p['q'] != "") {
        foreach ($iata as $line) {
            $object[$line[1]] = $line[0];
        }
		echo $object[$p['q']];
	}
	exit();