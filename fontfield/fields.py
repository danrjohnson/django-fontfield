from django import forms
from django.conf import settings
from django.db import models
from django.template.loader import render_to_string

class FontWidget(forms.Widget):
  class Media:
    js = ['http://code.jquery.com/jquery-1.6.2.js',settings.STATIC_URL + 'fontfield/font.js',]
    css = {'all' : (settings.STATIC_URL + 'fontfield/font.css',)}

  def render(self, name, value, attrs=None):
    return render_to_string('fontfield/font.html', locals())

class FontField(models.CharField):

  def __init__(self, *args, **kwargs):
    kwargs['max_length'] = 100
    super(FontField, self).__init__(*args, **kwargs )

  def formfield(self, **kwargs):
    kwargs['widget'] = FontWidget

    return super(FontField, self).formfield(**kwargs)

