import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octibre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene.','Feb.','Mar','Abril','May','Jun','Jul.','Agos','Sept.','Oct.','Nov.','Dic'],
  dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mier.','Jue.','Vie.','Sab'],
  today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

export default class CalendarPeluqueria extends Component{
render(){
  return (
        <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2012-05-17': {marked: true},
                '2020-08-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2012-05-19': {disabled: true, disableTouchEvent: true}
            }}
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 370
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              onDayPress={(day) => {
                console.log('selected day', day);
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
              }}
            /> );
    }}