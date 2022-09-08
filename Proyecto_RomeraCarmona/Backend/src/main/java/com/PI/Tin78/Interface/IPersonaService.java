package com.PI.Tin78.Interface;

import com.PI.Tin78.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    // Traer una persona de personas
    public List<Persona> getPersona();
    
    // Guardar un objeto del tipo Persona
    public void savePersona(Persona persona);
    
    // Eliminar un usuario
    public void deletePersona(Long id);
    
    // Buscar una persona
    public Persona findPersona(Long id);
}
