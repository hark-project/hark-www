all: # nothing to build

install:
	cd hark; hugo
	mkdir -p $(DESTDIR)/usr/share/hark-www
	cp -r hark/public $(DESTDIR)/usr/share/hark-www/
