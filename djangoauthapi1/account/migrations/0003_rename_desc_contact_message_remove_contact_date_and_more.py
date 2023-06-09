# Generated by Django 4.1.7 on 2023-03-28 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='desc',
            new_name='message',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='date',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='phone',
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='contact',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
