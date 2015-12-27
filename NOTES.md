## NOTES ##
Date: 2015-12-26


## Where to Store Files ##

As of v1.2.0, URLs to important file-system directories are provided. Each URL is in the form `file:///path/to/spot/`, and can be converted to a `DirectoryEntry` using `window.resolveLocalFileSystemURL()`.

DirectoryEntry (cordova.file.)      | Andriod  | iOS | BB 10 | OSX | Windows |  What it means
------------------------------------|----------|-----|-------|-----|---------|-----------------
applicationDirectory                |    X     |  X  |   X   |  X  |    X    | **Read-only directory** where the application is installed.
applicationStorageDirectory         |    X     |  X  |   X   |  X  |    -    | Root directory of the application's sandbox; on iOS & windows this location is read-only (but specific subdirectories [like `/Documents` on iOS or `/localState` on windows] are read-write). All data contained within is private to the app.
dataDirectory                       |    X     |  X  |   X   |  -  |    X    | Persistent and private data storage within the application's sandbox using internal memory (on Android, if you need to use external memory, use `.externalDataDirectory`). On iOS, this directory is not synced with iCloud (use `.syncedDataDirectory`)
cacheDirectory                      |    X     |  X  |   X   |  X  |    X    | Directory for cached data files or any files that your app can re-create easily. The OS may delete these files when the device runs low on storage, nevertheless, apps should not rely on the OS to delete files in here.
externalApplicationStorageDirectory |    X     |  -  |   -   |  -  |    -    | Application space on external storage.
externalDataDirectory               |    X     |  -  |   -   |  -  |    -    | Where to put app-specific data files on external storage.
externalCacheDirectory              |    X     |  -  |   -   |  -  |    -    | Application cache on external storage.
externalRootDirectory               |    X     |  -  |   X   |  -  |    -    | External storage (SD card) root.
tempDirectory                       |    -     |  X  |   -   |  X  |    X    | Temp directory that the OS can clear at will. Do not rely on the OS to clear this directory; your app should always remove files as applicable.
syncedDataDirectory                 |    -     |  X  |   -   |  -  |    X    | Holds app-specific files that should be synced (e.g. to iCloud). 
documentsDirectory                  |    -     |  X  |   -   |  X  |    -    | Files private to the app, but that are meaningful to other application (e.g. Office files). Note that for OSX this is the user's `~/Documents` directory.
sharedDirectory                     |    -     |  -  |   X   |  -  |    -    | Files globally available to all applications.

