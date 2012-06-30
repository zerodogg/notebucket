default: build upload
upload:
	-[ -x ./UPLOAD ] && ./UPLOAD
build:
	perl src/build
clean:
	rm -f *~ */*~
