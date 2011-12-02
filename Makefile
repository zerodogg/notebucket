default:
	perl src/build
	-[ -x ./UPLOAD ] && ./UPLOAD
clean:
	rm -f *~ */*~
