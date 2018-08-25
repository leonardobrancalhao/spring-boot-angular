package com.leonardobrancalhao.financeiro.repository;

import java.util.ArrayList;
import java.util.List;

import com.leonardobrancalhao.financeiro.model.Categoria;

public class CategoriaRepository {

	public List<Categoria> listar() {
		List<Categoria> lista = new ArrayList<>();

		for (int i = 0; i < 10; i++) {
			Categoria categoria = new Categoria();
			categoria.setId(i + 1);
			categoria.setNome("Categoria " + (i + 1));
			
			lista.add(categoria);
		}
		
		return lista;
	}

}
