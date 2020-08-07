import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../assets/styles/global.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                  name="subject" 
                  label="Matéria" 
                  options = {[
                    {value: 'Matemática', label: 'Matemática'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Portugês', label: 'Português'},
                    {value: 'Física', label: 'Física'},
                    {value: 'Química', label: 'Química'},
                    {value: 'English', label: 'English'},
                        ]}
                />

                <Select 
                  name="week_day" 
                  label="Dia da semana" 
                  options = {[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sabado'},
                        ]}
                />
                    <Input name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main> 
        </div>
    )
}

export default TeacherList;