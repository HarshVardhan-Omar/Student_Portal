# Generated by Django 3.2.7 on 2021-11-14 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_excelfiles'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ExcelFiles',
            new_name='Files',
        ),
    ]
