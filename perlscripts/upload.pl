#!/usr/bin/perl -w

use HTTP::Request::Common;
use LWP::UserAgent;

$yourusername='';	# put your OSM username between the quotes
$yourpassword='';	# put your OSM password between the quotes

# Log in
$ua=LWP::UserAgent->new;
$ua->credentials('www.openstreetmap.org:443', 'Web Password', $milindoka, $jsm996115785);

foreach $filename (@ARGV) {
	print "Uploading $filename\n";
	print "Description: "; $description=<STDIN>; chomp $description;
	print "Tags (comma-separated): "; $tags=<STDIN>; chomp $tags;

	$response=$ua->request(POST 'https://www.openstreetmap.org/api/0.6/gpx/create',
			Content_Type => 'form-data',
			Content	     => [ file       =>[$filename],
					  description=>$description,
					  tags       =>$tags,
					  visibility =>"identifiable" ] );

	if ($response->code==200) {
		# yay, success
		print "uploaded successfully\n";
	} else {
		# boo, failure
		print "couldn't upload $filename: " . $response->status_line . "\n";
	}
}

# Save this as upload.pl in the same directory as your .gpx files. Then go to the command line and type
# perl upload.pl *.gpx

