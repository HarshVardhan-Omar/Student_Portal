# Generated by Django 3.2.7 on 2021-11-21 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_syllabus_branch'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='ResultSem1',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem2',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem3',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem4',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem5',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem6',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem7',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AddField(
            model_name='student',
            name='ResultSem8',
            field=models.FileField(blank=True, null=True, upload_to='Result/'),
        ),
        migrations.AlterField(
            model_name='syllabus',
            name='Content',
            field=models.FileField(upload_to='syllabus/'),
        ),
    ]
