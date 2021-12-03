del /q C:\Windows\Prefetch\*.*
del /q C:\Windows\Temp\*.*
cd "C:\Documents and Settings\%username%\Local Settings\Temp"
DEL /F /S /Q *.*
cd "C:\Documents and Settings\%username%\Recent"
del /q *.*