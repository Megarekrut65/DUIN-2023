# Generated by Django 4.2.7 on 2023-11-13 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report',
            old_name='start_from_one',
            new_name='start_from_number_one',
        ),
        migrations.RemoveField(
            model_name='report',
            name='lesson_prefix',
        ),
        migrations.RemoveField(
            model_name='report',
            name='lesson_suffix',
        ),
        migrations.AddField(
            model_name='report',
            name='lesson_title',
            field=models.CharField(default='Lesson #$number - $time $date', max_length=100),
        ),
        migrations.AddField(
            model_name='report',
            name='only_completed',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='report',
            name='footer',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='report',
            name='header',
            field=models.CharField(default='$student in $subject', max_length=200),
        ),
    ]