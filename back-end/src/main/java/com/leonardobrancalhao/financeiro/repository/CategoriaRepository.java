package com.leonardobrancalhao.financeiro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leonardobrancalhao.financeiro.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

	// select * from categoria where nome like '%parametro%' order by nome
	List<Categoria> findByNomeContainingIgnoreCaseOrderByNome(String nome);

}
