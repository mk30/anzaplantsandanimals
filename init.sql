create table samples (
  sampleid integer primary key,
  dateobserved text,
  location text,
  samplenotes text 
);
create table photos (
  photoid integer primary key,
  sampleid integer,
  pathtoname text,
  photonotes text
);
create table referencerecords (
  refid integer primary key,
  scienname text
);
create table commonnames (
  commonid integer primary key,
  commonname text,
  refid integer
);
create table refpics (
  refpicid integer primary key,
  refpicurl text,
  refid integer

);
create table reflinks (
  reflinkid integer primary key,
  reflinkurl text,
  refid integer
);
create table samplestorefs (
  samplerefid integer primary key,
  sampleid integer,
  refid integer,
  confirmed text
);
